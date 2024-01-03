CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(191) NOT NULL,
    email VARCHAR(191) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    email_verified_at TIMESTAMP,
    password VARCHAR(255),
    profile_image_path VARCHAR(255),
    remember_token VARCHAR(100),
    is_two_factor_enabled BOOLEAN DEFAULT FALSE,
    two_factor_verification_code TEXT,
    two_factor_verification_expiry TIMESTAMP,
    password_last_changed TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);
CREATE TABLE general_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    value TEXT,
    is_specific INTEGER NOT NULL DEFAULT 0,
    is_multilang BOOLEAN NOT NULL DEFAULT FALSE,
    type VARCHAR(255),
    page VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);
CREATE TABLE oauth_access_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id BIGINT,
    client_id BIGINT NOT NULL,
    name VARCHAR(255),
    scopes TEXT,
    revoked BOOLEAN NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    expires_at TIMESTAMP
);
CREATE TABLE oauth_refresh_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    access_token_id UUID NOT NULL,
    revoked BOOLEAN NOT NULL,
    expires_at TIMESTAMP
);
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(255),
    role_code VARCHAR(255),
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);
CREATE TABLE user_role (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    role_code VARCHAR(255),
    user_id INTEGER NOT NULL
);
CREATE TABLE role_permissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    display_name VARCHAR(255) NOT NULL,
    permission_code VARCHAR(199) NOT NULL,
    display_group VARCHAR(2555) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);
CREATE TABLE role_permission (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    permission_code VARCHAR(199) NOT NULL,
    role_code VARCHAR(255)
);
CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT,
    email VARCHAR(255),
    phone VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);