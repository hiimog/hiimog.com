// import { Post } from "../compiler/index";

// const post: Post = {
//     title: "Logging Fundamentals",
//     tags: ["observability", "logging", "relability", "debugging"],
//     summary: "Proper logging is essential to the creation of robust software. It is the primary tool used when faced with novel production issues.",
//     content: [
//         [
//             "We've all seen code littered with statements like:",
//             {
//                 type: "code",
//                 inline: true,
//                 lang: "py",
//                 content: `log.info("found duplicate: %s" % name)`
//             }
//         ]
//     ]
// }

import {Post, Paragraph, Code, Text} from "../compiler";

const post = new Post(
    "Logging Fundamentals",
    ["logging", "fundamentals", "observability"],
    "Proper logging is essential to the creation of robust software. It is the primary tool used when faced with novel production issues.",
    [
        [
            
        ]
    ]
)