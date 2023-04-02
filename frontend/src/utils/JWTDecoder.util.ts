import jwt_decode from "jwt-decode";

export const JWTDecoder = (JWT: string) => {
  return jwt_decode(JWT);
}
