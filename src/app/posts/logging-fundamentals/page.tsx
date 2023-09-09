import styles from "../posts.module.scss";
import clsx from "clsx";
export default function LoggingFundamentals() {
  const commonUnstructuredLogFormats = [
    [
      "Common Log Format",
      `127.0.0.1 user-identifier frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326`,
    ],
    [
      "Syslog",
      "<34>1 2003-10-11T22:14:15.003Z mymachine.example.com su - ID47 - BOM'su root' failed for og on /dev/pts/8",
    ],
    [
      "Common Event Format",
      "CEF:0|Trend Micro|Deep Security Manager|<DSM version>|600|User Signed In|3|src=10.52.116.160 suser=admin target=admin msg=User signed in from 2001:db8::5",
    ],
  ];

  return (
    <div className="container mx-auto">
      <h1 className={clsx(styles.title, "my-2")}>Logging Fundamentals</h1>
      <h2 className={styles.title}>Motivation</h2>
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
      <h2 className={styles.title}>Structured vs Unstructured</h2>
      Logs come in three kinds: unstructured, semi-structured, and structured. 
      <h3 className={styles.title}>Unstructured</h3>
      <p className="my-2">
        Unstructured logs
        are what most people are familiar with. They are typically lines of text
        with some loose pattern where each line represents a distinct entry.
        Some examples:
        <ul className="list-disc list-inside my-2">
          {commonUnstructuredLogFormats.map(([name, ex]) => (
            <li>
              {name}: <code className={"text-cyan-500"}>{ex}</code>
            </li>
          ))}
        </ul>
      </p>
      <p>
        As you can see, there is a valuable information embedded in these lines.
        To use this encoded enformation: we need to identify the relevant
        substrings, extract them, and then parse them into usable values. This
        has greater compute costs and can hurt query performance when searching
        over large amounts of logs.
      </p>
      <h3 className={styles.title}>Structured</h3>
      <p>
        Structured logging writes log entries in a form that can be more easily
        processed by machines. The most common format is JSON, and these are
        commonly written using{" "}
        <a className={"underline"} href="https://jsonlines.org/">
          JSON Lines
        </a>
        . This is simply a format where each line is a valid JSON value (most
        commonly an object). Other well known formats are{" "}
        <a className={"underline"} href="https://protobuf.dev/">Protobufs</a> and XML.
      </p>
    </div>
    /*
    Tools
        - splunk
        - seq
        - lnav
        - datadog
        - elk stack
        - serilog
    Tactics
        - log location
        - only consts in msg
        - scoped logging
        - celf
        - structured logging
        - all logs in utc

    */
  );
}
