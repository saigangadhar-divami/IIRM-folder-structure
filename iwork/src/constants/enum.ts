// rolesConfig.ts
export enum Roles {
    SUPER_ADMIN = "super_admin",
    ADMIN = "admin",
    MANAGER = "manager",
    USER = "user",
    TEAM_LEAD = "team_lead",
    TEAM_MEMBER = "team_member",
    TEAM_USER = "team_user",
  }
export const roleHierarchy = [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.MANAGER, Roles.USER];

export enum Permission {
    READ = 'READ',
    WRITE = 'WRITE',
    DELETE = 'DELETE',
    UPDATE = 'UPDATE',
    ADMIN = 'ADMIN'
}