const fs = require("fs");
const AWS = require("aws-sdk");
const moment = require("moment");
const fileType = require("file-type");

const s3 = new AWS.S3();

module.exports.upload = async (event: any, context: any, callback: any) => {
  const { filedata, filename } = JSON.parse(event.body);

  const data = Buffer.from(filedata, "base64");

  const uploadParams = {
    ACL: "public-read",
    Bucket: "repo-783663936053",
    Body: data,
    Key: filename,
  };

  s3.upload(uploadParams, function (err: Error, data: any) {
    if (err) {
      callback(err, null);
    } else {
      let response = {
        statusCode: 200,
        headers: {
          my_header: "my_value",
        },
        body: JSON.stringify(data),
        isBase64Encoded: false,
      };
      callback(null, response);
    }
  });

  let response = {
    statusCode: 200,
    headers: {
      my_header: "my_value",
    },
    body: JSON.stringify(data),
    isBase64Encoded: false,
  };

  return response;
};
