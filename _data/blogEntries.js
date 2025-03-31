import { XRPC, CredentialManager } from "@atcute/client";

const manager = new CredentialManager({
  service: "https://inkcap.us-east.host.bsky.network",
});
const rpc = new XRPC({ handler: manager });

let records = [];
let cursor = undefined;
do {
  const response = (
    await rpc.get("com.atproto.repo.listRecords", {
      params: {
        repo: "did:plc:avlpu4l2j5u3johint7tqrmu",
        collection: "top.aylac.blog.entry",
        cursor: cursor,
        limit: 100,
      },
    })
  ).data;
  records = records.concat(response.records);
  cursor = response.cursor;
} while (cursor);
records.sort(
  (a, b) => new Date(b.value.createdAt) - new Date(a.value.createdAt),
);

export default function () {
  return records;
}
