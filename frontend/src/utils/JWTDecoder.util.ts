import jwt_decode from "jwt-decode";

interface IJwtDecoder {
  id: string;
  email: string;
}

export const JWTDecoder = (JWT: string): IJwtDecoder => {
  return jwt_decode(JWT);
};
