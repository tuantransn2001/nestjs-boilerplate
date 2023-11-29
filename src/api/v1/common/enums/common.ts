export enum ProviderName {
  MONGOOSE_CONNECTION = 'MONGOOSE_CONNECTION',
  KNEX_CONNECTION = 'KNEX_CONNECTION',
}

export enum ModelName {
  // ? SQL
  CONVERSATION = 'Conversation',
  NOTIFICATION = 'Notification',
  // ? No SQL
  USER_FIEND = 'UserFriend',
  USER_SEARCH_HISTORY = 'UserSearchHistory',
  POST_META = 'PostMeta',
  USER_POST = 'UserPost',
  POST_COMMENT = 'PostComment',
  MESSAGE = 'Message',
  HEALTH_CHECK = 'HealthCheck',
  CONTACT = 'Contact',
  USER_CONTACT = 'UserContact',
  REPORT = 'Report',
  LOCAL_FILE = 'LocalFile',
  USER = 'User',
  USER_ACCESS = 'UserAccess',
  USER_VERIFICATION = 'UserVerification',
  BLOCK_LIST = 'BlockList',
  DEVICE = 'Device',
  POST_LIKE = 'PostLike',
  COMMENT_LIKE = 'CommentLike',
}
