import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);

  const updateValues = data; // TODO: proper filtering and map

  const params = {
    TableName: "sprint",
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      sprintId: event.pathParameters.id
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: "SET " + Object.keys(updateValues).map(x => x + ' = :' + x).join(', '),
    ExpressionAttributeValues: updateValues,
    ReturnValues: "ALL_NEW"
  };

  try {
    const result = await dynamoDbLib.call("update", params);
    callback(null, success({ status: true }));
  } catch (e) {
    callback(null, failure({ status: false}));
  }
}