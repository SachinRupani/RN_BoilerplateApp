export interface UserEntity {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly avatarUrl: string;
}

export const sampleUsers: Array<UserEntity> = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    firstName: "George",
    lastName: "Bluth",
    avatarUrl: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    firstName: "Janet",
    lastName: "Weaver",
    avatarUrl: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    firstName: "Emma",
    lastName: "Wong",
    avatarUrl: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    firstName: "Eve",
    lastName: "Holt",
    avatarUrl: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    firstName: "Charles",
    lastName: "Morris",
    avatarUrl: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    firstName: "Tracey",
    lastName: "Ramos",
    avatarUrl: "https://reqres.in/img/faces/6-image.jpg",
  },
];
