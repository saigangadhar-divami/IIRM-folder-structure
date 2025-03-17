import { Roles } from "./enum";

export const config = {
    success: true,
    message: "Login successful",
    data: {
        users: [
            {
                id: 1,
                name: "Alice Johnson",
                email: "superadmin@example.com",
                role: Roles.SUPER_ADMIN,
                subRoles: [
                    {
                      role: Roles.MANAGER,
                      permissions: ["edit_users", "view_reports"],
                      subRoles: [
                        {
                          role: Roles.TEAM_LEAD,
                          permissions: ["assign_tasks", "view_team"],
                          subRoles: [
                            {
                              role: Roles.TEAM_USER,
                              permissions: ["view_dashboard"]
                            }
                          ]
                        }
                      ]
                    }
                ],
                permissions: ["manage_everything", "view_reports", "configure_system", "manage_roles", "book_appointments", "assign_tasks"],
            },
            {
                id: 2,
                name: "Bob Smith",
                email: "admin@example.com",
                role: Roles.ADMIN,
                subRoles: [
                    {
                      role: Roles.MANAGER,
                      permissions: ["edit_users", "view_reports"],
                      subRoles: [
                        {
                          role: Roles.TEAM_LEAD,
                          permissions: ["assign_tasks", "view_team"],
                          subRoles: [
                            {
                              role: Roles.TEAM_USER,
                              permissions: ["view_dashboard"]
                            }
                          ]
                        }
                      ]
                    }
                ],
                permissions: ["manage_users", "view_reports", "manage_appointments", "configure_settings", "assign_tasks"],
            },
            {
                id: 3,
                name: "Charlie Davis",
                email: "manager@example.com",
                role: Roles.MANAGER,
                subRoles: [
                    {
                      role: Roles.TEAM_LEAD,
                      permissions: ["assign_tasks", "view_team"],
                      subRoles: [
                        {
                          role: Roles.TEAM_USER,
                          permissions: ["view_dashboard"]
                        }
                      ]
                    }
                ],
                permissions: ["manage_users", "view_reports", "manage_appointments", "configure_settings", "assign_tasks"],
            },
            {
                id: 4,
                name: "David Miller",
                email: "user@example.com",
                role: Roles.USER,
                subRoles: [
                    {
                      role: Roles.TEAM_LEAD,
                      permissions: ["assign_tasks", "view_team"],
                      subRoles: [
                        {
                          role: Roles.TEAM_USER,
                          permissions: ["view_dashboard"]
                        }
                      ]
                    }
                ],
                permissions: ["view_profile", "book_appointments", "update_information"],
            },
        ],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    },
};


export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    subRoles?: SubRole[];
    permissions: string[];
}

export interface SubRole {
    role: string;
    permissions: string[];
    subRoles?: SubRole[];
}

export interface AuthContextType {
    user: User | null;
    login: (email: string) => void;
    logout: () => void;
}