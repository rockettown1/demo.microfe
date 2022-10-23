import { Context, APIGatewayProxyResult, APIGatewayProxyEvent } from "aws-lambda";
import App from "../app";

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  try {
    const app = await App.loadApp();

    return {
      ...app,
      headers: { "Content-Type": "text/html" },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: "<div>Failed to load fragment</div>",
      headers: { "Content-Type": "text/html" },
    };
  }
};
