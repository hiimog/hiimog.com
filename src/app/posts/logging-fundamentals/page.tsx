export default function LoggingFundamentals() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl my-2">Logging Fundamentals</h1>
      <p className="my-2">
        Writing production-grade software is more than crafting efficient
        algorithms or user-friendly interfaces; it&apos;s also about the ability
        to diagnose and mitigate problems swiftly as they arise. Sometimes your
        code is buggy, but other times the problem lies with some misbehaving
        dependency in the broader software ecosystem. To tackle these
        challenges, developers commonly rely on two main tools: metrics and
        logs. While metrics offer numerical insights—like response time or queue
        lengths—logs provide a more detailed narrative of system behavior. When
        implemented effectively, logs can be the critical difference between a
        catastrophe and a bump in the road.
      </p>
      <p className="my-2">
        Logs come in two kinds: unstructured and structured. Unstructured logs
        are typically lines of text with some loose pattern where each line
        represents a distinct entry. Some examples:
        <ul className="list-disc list-inside my-2">
          <li>
            Common Log Format:{" "}
            <code className="inline text-cyan-300">
              127.0.0.1 user-identifier frank [10/Oct/2000:13:55:36 -0700]
              &quot;GET /apache_pb.gif HTTP/1.0&quot; 200 2326
            </code>
          </li>
          <li>
            Syslog:{" "}
            <code className="inline text-cyan-300">
              &lt;34&gt;1 2003-10-11T22:14:15.003Z mymachine.example.com su -
              ID47 - BOM&apos;su root&apos; failed for og on /dev/pts/8
            </code>
          </li>
          <li>
            Common Event Format:{" "}
            <code className="inline text-cyan-300">
              CEF:0|Trend Micro|Deep Security Manager|&lt;DSM
              version&rt;|600|User Signed In|3|src=10.52.116.160 suser=admin
              target=admin msg=User signed in from 2001:db8::5
            </code>
          </li>
        </ul>
        As you can see, there is a lot of information embedded in these lines.
        To use this encoded enformation: we need to identify the relevant
        substrings and then parse them into usable values. You may be wondering
        what the big deal is?
      </p>
    </div>
  );
}
