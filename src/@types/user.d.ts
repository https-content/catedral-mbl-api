export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  type User = {
    id?: string;
    first_name: string;
    last_name: string;
    nickname: string;
    phone: string;
    email: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
  };

  interface Employee {
    id: number;
    name: string;
    salary: number;
  }

  type Person = {
    name: string;
    age: number;
  };
}
