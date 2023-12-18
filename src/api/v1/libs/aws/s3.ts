// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import * as fs from 'fs';
import * as AWS from 'aws-sdk';
import sharp from 'sharp';
import * as path from 'path';

class AWSS3 {
  private readonly config: AWS.S3.ClientConfiguration;
  private readonly s3: AWS.S3;

  constructor() {
    this.config = {
      apiVersion: '2006-03-01',
      accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
      region: process.env.AWS_S3_REGION,
      signatureVersion: 'v4',
    };

    this.s3 = new AWS.S3(this.config);
  }

  public getSignUrlForFile(
    uniqKey?: string,
  ): Promise<{ signedUrl: string; fileName: string }> {
    return new Promise((resolve, reject) => {
      try {
        const fileName = path.basename(uniqKey);

        const params: AWS.S3.GetObjectRequest = {
          Bucket: process.env.AWS_S3_BUCKET_NAME as string,
          Key: uniqKey,
          Expires: 30 * 60,
        };

        const signedUrl = this.s3.getSignedUrl('getObject', params);

        if (signedUrl) {
          return resolve({
            signedUrl,
            fileName,
          });
        } else {
          return reject('Cannot create signed URL');
        }
      } catch (err) {
        return reject('Cannot create signed URL!');
      }
    });
  }

  public upload(
    filepath: string,
    name?: string,
    options?: { resize?: { width: number; height: number } },
  ): Promise<{ filepath: string; data: AWS.S3.PutObjectOutput[] }> {
    return new Promise((resolve, reject) => {
      if (fs.existsSync(filepath)) {
        const res: { filepath: string; data: AWS.S3.PutObjectOutput[] } = {
          filepath: filepath,
          data: [],
        };
        const fileBinaryString = fs.readFileSync(filepath, null);
        const params: AWS.S3.PutObjectRequest = {
          Body: fileBinaryString,
          Bucket: process.env.AWS_S3_BUCKET_NAME as string,
          Key: name,
        };

        this.s3.putObject(params, (e: any, d: { name: string }) => {
          if (e) {
            reject(e);
          }

          d.name = name;
          res.data.push(d);
          if (
            options &&
            options.resize &&
            typeof options.resize.width === 'number' &&
            typeof options.resize.height === 'number'
          ) {
            const width = options.resize.width;
            const height = options.resize.height;

            sharp(filepath)
              .resize(width, height)
              .toBuffer()
              .then((buffer: any) => {
                params.Body = buffer;

                params.Key = width + '-' + height + '-' + params.Key;

                this.s3.putObject(params, (e: any, d: { name: any }) => {
                  if (e) {
                    reject(e);
                  }

                  d.name = params.Key;

                  res.data.push(d);
                  resolve(res);
                });
              })
              .catch((e: any) => reject(e));
          } else {
            resolve(res);
          }
        });
      } else {
        reject('File ' + filepath + ' does not exist');
      }
    });
  }
}

export const AwsS3Service = new AWSS3();
