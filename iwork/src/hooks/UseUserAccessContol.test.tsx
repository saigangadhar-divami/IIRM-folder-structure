import { renderHook } from '@testing-library/react';
import { useUserAccessControl } from './useUserAccessControl';
import { AuthContext } from '../context';
import { Roles } from '../constants/enum';
import { User } from '../constants';
import React from 'react';

describe('useUserAccessControl', () => {
  const mockUser: User = {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    role: Roles.ADMIN,
    permissions: ['create', 'edit', 'delete'],
    subRoles: [
      { role: Roles.TEAM_LEAD, permissions: ['edit'] },
      { role: Roles.TEAM_USER, permissions: ['view'] }
    ]
  };

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AuthContext.Provider value={{ user: mockUser, login: jest.fn(), logout: jest.fn() }}>
      {children}
    </AuthContext.Provider>
  );

  const wrapperWithoutUser = ({ children }: { children: React.ReactNode }) => (
    <AuthContext.Provider value={{ user: null, login: jest.fn(), logout: jest.fn() }}>
      {children}
    </AuthContext.Provider>
  );

  describe('hasRole', () => {
    it('should return true when user has the specified role', () => {
      const { result } = renderHook(() => useUserAccessControl(), { wrapper });
      expect(result.current.hasRole(Roles.ADMIN)).toBe(true);
    });

    it('should return false when user does not have the specified role', () => {
      const { result } = renderHook(() => useUserAccessControl(), { wrapper });
      expect(result.current.hasRole(Roles.TEAM_LEAD)).toBe(false);
    });

    it('should return false when user is null', () => {
      const { result } = renderHook(() => useUserAccessControl(), { wrapper: wrapperWithoutUser });
      expect(result.current.hasRole(Roles.ADMIN)).toBe(false);
    });
  });

  describe('hasPermission', () => {
    it('should return true when user has the specified permission', () => {
      const { result } = renderHook(() => useUserAccessControl(), { wrapper });
      expect(result.current.hasPermission('create')).toBe(true);
    });

    it('should return false when user does not have the specified permission', () => {
      const { result } = renderHook(() => useUserAccessControl(), { wrapper });
      expect(result.current.hasPermission('unknown')).toBe(false);
    });

    it('should return false when user is null', () => {
      const { result } = renderHook(() => useUserAccessControl(), { wrapper: wrapperWithoutUser });
      expect(result.current.hasPermission('create')).toBe(false);
    });
  });

  describe('hasHigherRole', () => {
    it('should return true when user has a higher role', () => {
      const { result } = renderHook(() => useUserAccessControl(), { wrapper });
        expect(result.current.hasHigherRole([Roles.TEAM_LEAD])).toBe(true);
    });

    it('should return true when user has an equal role', () => {
      const { result } = renderHook(() => useUserAccessControl(), { wrapper });
      expect(result.current.hasHigherRole([Roles.ADMIN])).toBe(true);
    });

    it('should return false when user has a lower role', () => {
      const customWrapper = ({ children }: { children: React.ReactNode }) => (
        <AuthContext.Provider 
          value={{ 
            user: { ...mockUser, role: Roles.TEAM_LEAD }, 
            login: jest.fn(), 
            logout: jest.fn() 
          }}
        >
          {children}
        </AuthContext.Provider>
      );

      const { result } = renderHook(() => useUserAccessControl(), { wrapper: customWrapper });
      expect(result.current.hasHigherRole([Roles.ADMIN])).toBe(false);
    });

    it('should return false when user is null', () => {
      const { result } = renderHook(() => useUserAccessControl(), { wrapper: wrapperWithoutUser });
      expect(result.current.hasHigherRole([Roles.TEAM_LEAD])).toBe(false);
    });
  });

  describe('hasSubRole', () => {
    it('should return true when user has the specified subRole', () => {
      const { result } = renderHook(() => useUserAccessControl(), { wrapper });
      expect(result.current.hasSubRole(Roles.TEAM_LEAD)).toBe(true);
    });

    it('should return false when user does not have the specified subRole', () => {
      const { result } = renderHook(() => useUserAccessControl(), { wrapper });
      expect(result.current.hasSubRole(Roles.ADMIN)).toBe(false);
    });

    it('should return false when user has no subRoles', () => {
      const customWrapper = ({ children }: { children: React.ReactNode }) => (
        <AuthContext.Provider 
          value={{ 
            user: { ...mockUser, subRoles: [] }, 
            login: jest.fn(), 
            logout: jest.fn() 
          }}
        >
          {children}
        </AuthContext.Provider>
      );

      const { result } = renderHook(() => useUserAccessControl(), { wrapper: customWrapper });
        expect(result.current.hasSubRole(Roles.TEAM_LEAD)).toBe(false);
    });

    it('should return false when user is null', () => {
      const { result } = renderHook(() => useUserAccessControl(), { wrapper: wrapperWithoutUser });
        expect(result.current.hasSubRole(Roles.TEAM_LEAD)).toBe(false);
    });
  });
}); 