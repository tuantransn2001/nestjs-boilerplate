export enum ProviderName {
  MONGOOSE_CONNECTION = 'MONGOOSE_CONNECTION',
  KNEX_CONNECTION = 'KNEX_CONNECTION',
}

export enum ModelName {
  // ? SQL
  CONVERSATION = 'Conversation',
  NOTIFICATION = 'Notification',
  // ? No SQL
  USER = 'Users',
  GENERAL_SETTING = 'GeneralSettings',
  ACCESS_TOKEN = 'AccessTokens',
  REFRESH_TOKEN = 'RefreshTokens',
  ROLE = 'Roles',
  USER_ROLE = 'UserRoles',
  ROLE_PERMISSION = 'RolePermission',
  ROLE_PERMISSIONS = 'RolePermissions',
  HEALTH_CHECK = 'HealthCheck',
}
