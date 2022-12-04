import Group from "./group";
// "Property 'id' has no initializer and is not definitely assigned in the constructor."
export class User {
    id!: number;
    firstname!: string;
    lastname!: string;
    address!: string;
    city!: string;
    state!: string;
    group!: Group;
}

export default User;