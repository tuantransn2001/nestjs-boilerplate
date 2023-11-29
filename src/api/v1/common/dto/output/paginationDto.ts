import { Field, InputType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

class SearchObjectResponse {
  [key: string]: string | string;
}

@InputType()
export class PaginationDtoOutput {
  @Field()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(0)
  page_number?: number;

  @Field()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(1)
  page_size?: number;

  @Field()
  @IsOptional()
  @IsString()
  search?: SearchObjectResponse;
}
