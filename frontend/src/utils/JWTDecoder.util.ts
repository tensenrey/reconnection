import jwt_decode from "jwt-decode";

interface IJwtDecoder {
  id: string;
  email: string;
}
export const JWTDecoder = (JWT: string): IJwtDecoder => {
  let jwt = { id: "", email: ""};
  
  try {
    jwt = jwt_decode(JWT);
  } catch (e) {
    window.location.href = "#/";
  }
  
  return jwt;
};
