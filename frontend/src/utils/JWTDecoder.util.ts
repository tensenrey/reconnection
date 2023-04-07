import jwt_decode from "jwt-decode";

export const JWTDecoder = (JWT: string): any => {
  return jwt_decode(JWT);
};
