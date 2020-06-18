import React from "react";
import { ResponsiveTreeMap } from "@nivo/treemap";

const root = {
  name: "nivo",
  color: "hsl(118, 70%, 50%)",
  children: [
    {
      name: "viz",
      color: "hsl(254, 70%, 50%)",
      children: [
        {
          name: "stack",
          color: "hsl(235, 70%, 50%)",
          children: [
            {
              name: "chart",
              color: "hsl(145, 70%, 50%)",
              loc: 81122,
            },
            {
              name: "xAxis",
              color: "hsl(57, 70%, 50%)",
              loc: 383,
            },
            {
              name: "yAxis",
              color: "hsl(4, 70%, 50%)",
              loc: 57265,
            },
            {
              name: "layers",
              color: "hsl(220, 70%, 50%)",
              loc: 8649,
            },
          ],
        },
        {
          name: "pie",
          color: "hsl(259, 70%, 50%)",
          children: [
            {
              name: "chart",
              color: "hsl(356, 70%, 50%)",
              children: [
                {
                  name: "pie",
                  color: "hsl(235, 70%, 50%)",
                  children: [
                    {
                      name: "outline",
                      color: "hsl(151, 70%, 50%)",
                      loc: 157434,
                    },
                    {
                      name: "slices",
                      color: "hsl(289, 70%, 50%)",
                      loc: 173038,
                    },
                    {
                      name: "bbox",
                      color: "hsl(333, 70%, 50%)",
                      loc: 105898,
                    },
                  ],
                },
                {
                  name: "donut",
                  color: "hsl(157, 70%, 50%)",
                  loc: 198124,
                },
                {
                  name: "gauge",
                  color: "hsl(259, 70%, 50%)",
                  loc: 177698,
                },
              ],
            },
            {
              name: "legends",
              color: "hsl(93, 70%, 50%)",
              loc: 64929,
            },
          ],
        },
      ],
    },
    {
      name: "colors",
      color: "hsl(331, 70%, 50%)",
      children: [
        {
          name: "rgb",
          color: "hsl(21, 70%, 50%)",
          loc: 192757,
        },
        {
          name: "hsl",
          color: "hsl(357, 70%, 50%)",
          loc: 171454,
        },
      ],
    },
    {
      name: "utils",
      color: "hsl(99, 70%, 50%)",
      children: [
        {
          name: "randomize",
          color: "hsl(41, 70%, 50%)",
          loc: 116424,
        },
        {
          name: "resetClock",
          color: "hsl(92, 70%, 50%)",
          loc: 35642,
        },
        {
          name: "noop",
          color: "hsl(288, 70%, 50%)",
          loc: 78759,
        },
        {
          name: "tick",
          color: "hsl(146, 70%, 50%)",
          loc: 166229,
        },
        {
          name: "forceGC",
          color: "hsl(350, 70%, 50%)",
          loc: 58200,
        },
        {
          name: "stackTrace",
          color: "hsl(21, 70%, 50%)",
          loc: 27798,
        },
        {
          name: "dbg",
          color: "hsl(100, 70%, 50%)",
          loc: 114898,
        },
      ],
    },
    {
      name: "generators",
      color: "hsl(327, 70%, 50%)",
      children: [
        {
          name: "address",
          color: "hsl(359, 70%, 50%)",
          loc: 119703,
        },
        {
          name: "city",
          color: "hsl(350, 70%, 50%)",
          loc: 148719,
        },
        {
          name: "animal",
          color: "hsl(319, 70%, 50%)",
          loc: 38785,
        },
        {
          name: "movie",
          color: "hsl(63, 70%, 50%)",
          loc: 40823,
        },
        {
          name: "user",
          color: "hsl(15, 70%, 50%)",
          loc: 58997,
        },
      ],
    },
    {
      name: "set",
      color: "hsl(322, 70%, 50%)",
      children: [
        {
          name: "clone",
          color: "hsl(289, 70%, 50%)",
          loc: 165696,
        },
        {
          name: "intersect",
          color: "hsl(256, 70%, 50%)",
          loc: 53325,
        },
        {
          name: "merge",
          color: "hsl(260, 70%, 50%)",
          loc: 156408,
        },
        {
          name: "reverse",
          color: "hsl(155, 70%, 50%)",
          loc: 133144,
        },
        {
          name: "toArray",
          color: "hsl(319, 70%, 50%)",
          loc: 191909,
        },
        {
          name: "toObject",
          color: "hsl(86, 70%, 50%)",
          loc: 199102,
        },
        {
          name: "fromCSV",
          color: "hsl(99, 70%, 50%)",
          loc: 130706,
        },
        {
          name: "slice",
          color: "hsl(176, 70%, 50%)",
          loc: 137672,
        },
        {
          name: "append",
          color: "hsl(268, 70%, 50%)",
          loc: 162684,
        },
        {
          name: "prepend",
          color: "hsl(333, 70%, 50%)",
          loc: 44254,
        },
        {
          name: "shuffle",
          color: "hsl(119, 70%, 50%)",
          loc: 3389,
        },
        {
          name: "pick",
          color: "hsl(117, 70%, 50%)",
          loc: 98034,
        },
        {
          name: "plouc",
          color: "hsl(346, 70%, 50%)",
          loc: 87052,
        },
      ],
    },
    {
      name: "text",
      color: "hsl(44, 70%, 50%)",
      children: [
        {
          name: "trim",
          color: "hsl(6, 70%, 50%)",
          loc: 194754,
        },
        {
          name: "slugify",
          color: "hsl(89, 70%, 50%)",
          loc: 55926,
        },
        {
          name: "snakeCase",
          color: "hsl(64, 70%, 50%)",
          loc: 146807,
        },
        {
          name: "camelCase",
          color: "hsl(100, 70%, 50%)",
          loc: 114517,
        },
        {
          name: "repeat",
          color: "hsl(89, 70%, 50%)",
          loc: 45431,
        },
        {
          name: "padLeft",
          color: "hsl(230, 70%, 50%)",
          loc: 48025,
        },
        {
          name: "padRight",
          color: "hsl(315, 70%, 50%)",
          loc: 37543,
        },
        {
          name: "sanitize",
          color: "hsl(70, 70%, 50%)",
          loc: 53965,
        },
        {
          name: "ploucify",
          color: "hsl(348, 70%, 50%)",
          loc: 57474,
        },
      ],
    },
    {
      name: "misc",
      color: "hsl(139, 70%, 50%)",
      children: [
        {
          name: "greetings",
          color: "hsl(156, 70%, 50%)",
          children: [
            {
              name: "hey",
              color: "hsl(268, 70%, 50%)",
              loc: 124198,
            },
            {
              name: "HOWDY",
              color: "hsl(94, 70%, 50%)",
              loc: 47062,
            },
            {
              name: "aloha",
              color: "hsl(292, 70%, 50%)",
              loc: 37568,
            },
            {
              name: "AHOY",
              color: "hsl(96, 70%, 50%)",
              loc: 117731,
            },
          ],
        },
        {
          name: "other",
          color: "hsl(144, 70%, 50%)",
          loc: 124920,
        },
        {
          name: "path",
          color: "hsl(222, 70%, 50%)",
          children: [
            {
              name: "pathA",
              color: "hsl(108, 70%, 50%)",
              loc: 194552,
            },
            {
              name: "pathB",
              color: "hsl(168, 70%, 50%)",
              children: [
                {
                  name: "pathB1",
                  color: "hsl(277, 70%, 50%)",
                  loc: 122820,
                },
                {
                  name: "pathB2",
                  color: "hsl(345, 70%, 50%)",
                  loc: 69739,
                },
                {
                  name: "pathB3",
                  color: "hsl(338, 70%, 50%)",
                  loc: 15450,
                },
                {
                  name: "pathB4",
                  color: "hsl(289, 70%, 50%)",
                  loc: 190682,
                },
              ],
            },
            {
              name: "pathC",
              color: "hsl(84, 70%, 50%)",
              children: [
                {
                  name: "pathC1",
                  color: "hsl(161, 70%, 50%)",
                  loc: 184429,
                },
                {
                  name: "pathC2",
                  color: "hsl(19, 70%, 50%)",
                  loc: 103796,
                },
                {
                  name: "pathC3",
                  color: "hsl(167, 70%, 50%)",
                  loc: 75649,
                },
                {
                  name: "pathC4",
                  color: "hsl(234, 70%, 50%)",
                  loc: 54416,
                },
                {
                  name: "pathC5",
                  color: "hsl(154, 70%, 50%)",
                  loc: 113012,
                },
                {
                  name: "pathC6",
                  color: "hsl(335, 70%, 50%)",
                  loc: 30398,
                },
                {
                  name: "pathC7",
                  color: "hsl(54, 70%, 50%)",
                  loc: 199771,
                },
                {
                  name: "pathC8",
                  color: "hsl(48, 70%, 50%)",
                  loc: 131451,
                },
                {
                  name: "pathC9",
                  color: "hsl(227, 70%, 50%)",
                  loc: 120767,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const MyResponsiveTreeMap = (root) => (
  <ResponsiveTreeMap
    root={root}
    identity="name"
    value="loc"
    innerPadding={3}
    outerPadding={3}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    label="loc"
    labelFormat=".0s"
    labelSkipSize={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
    colors={{ scheme: "nivo" }}
    borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={11}
  />
);
