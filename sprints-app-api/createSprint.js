import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "sprint",
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      sprintId: uuid.v1(),
      title: data.title,
      start: data.start,
      finish: data.finish,
      description: data.description,
      resolution: data.resolution,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    callback(null, success(params.Item));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}