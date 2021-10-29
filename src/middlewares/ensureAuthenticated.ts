import { verify } from "jsonwebtoken";

import authConfig from "../config/auth";

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

function ensureAuthenticated(context: any) {
  const authHeader = context.headers.Authorization;

  if (!authHeader) {
    throw new Error("JWT token is missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, authConfig.secret);

    const { sub } = decoded as TokenPayload;

    return sub;
  } catch (err) {
    throw new Error("Invalid JWT token");
  }
}

export default ensureAuthenticated;
