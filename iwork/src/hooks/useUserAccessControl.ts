import { useContext } from "react";
import { AuthContext } from "../context";
import { roleHierarchy, Roles } from "../constants/enum";
import {  User } from "../constants";

/**
 * Custom hook to get user roles and permissions from AuthContext.
 */
export const useUserAccessControl = () => {
  const auth = useContext(AuthContext);
  const user = auth?.user || null;

  /**
   * Checks if the user has a specific role.
   */
  const hasRole = (role: Roles): boolean => {
    return user?.role === role;
  };

  /**
   * Checks if the user has a specific permission.
   */
  const hasPermission = (permission: string): boolean => {
    console.log("🔹 Checking permission:", permission);
    console.log("🔹 User permissions:", user?.permissions);
    return user?.permissions?.includes(permission) ?? false;
  };

  /**
   * Checks if the user has an equal or higher role.
   */
  const hasHigherRole = (allowedRoles: Roles[]): boolean => {
    if (!user) return false;

    const userRoleIndex = roleHierarchy.indexOf(user.role as Roles);
    const minAllowedIndex = Math.min(...allowedRoles.map(role => roleHierarchy.indexOf(role as Roles)));

    return userRoleIndex !== -1 && userRoleIndex <= minAllowedIndex;
  };

const hasSubRole = (subRole: Roles): boolean => {
    const user: User | null = auth?.user || null;
    if (!user || !user.subRoles) return false; // No user or subRoles, deny access

    // Check only subRoles that belong to the user's role
    return user.subRoles.some(sub => sub.role === subRole);
};



  return { hasRole, hasPermission, hasHigherRole, hasSubRole };
};
