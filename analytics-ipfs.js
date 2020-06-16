
import IPFS from 'ipfs'
import OrbitDB from 'orbit-db'

// Create IPFS instance
const initIPFSInstance = async () => {
  return await IPFS.create({
    repo: './ipfs-repo',
    EXPERIMENTAL: { pubsub: true },
    preload: { "enabled": false },
    config: {
      Addresses: {
        Swarm: ["/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star"]
      }
    }
  });
};

initIPFSInstance().then(async ipfs => {
  console.log(">>>>", document.location.href);
  console.log(">>>", navigator.userAgent);

  const orbitdb = await OrbitDB.createInstance(ipfs);
  const options = {
    create: true,
    overwrite: true,
    localOnly: false,
    accessController: {
      write: ["*"]
    },
    sync: true
  }
  // Create / Open a database
  // 0318a2b483d8f9642988bf707026915585f4f8dd0efd843aed3c4564a72e276d05
  const db = await orbitdb.eventlog("/orbitdb/zdpuAokjQzUd67EbLAoQuujwtVoYMcYFMaWV2tSjTzWhPaooX/hello_910", options);
  await db.load();
  console.log(db.address.toString());

  // Listen for updates from peers
  db.events.on("replicated", address => {
    console.log(db.iterator({ limit: -1 }).collect());
  });

  // Add an entry
  // Create an object of JSON {timestamp, location, useragent}
  const timestamp = Date.now().toString();
  const user_agent = navigator.userAgent;
  const page_visited = document.location.pathname;
  const payload = {
    timestamp,
    user_agent,
    page_visited
  }

  const hash = await db.add(payload);
  console.log(hash);

  // Query
  const result = db.iterator({ limit: -1 }).collect();
  console.log(result);
  // Count unique users based on UA:
  const distinct_ua = new Set();
  result.forEach( r => {
    distinct_ua.add(r.payload.value.user_agent);
    document.getElementById('raw_logs').innerHTML += `${JSON.stringify(r.payload.value)} <br/>`;
  });
  document.getElementById('unique_visitors').textContent = [...distinct_ua].length;
});
