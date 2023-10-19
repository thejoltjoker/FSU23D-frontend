const content = [
  {
    div: {
      classList: ["flex", "flex-col"],
      children: [
        {
          div: {
            classList: [
              "text-center",
              "font-size-7",
              "mt-6",
              "pb-6",
              "no-select",
            ],
            innerText: "👋",
          },
        },
        {
          h2: {
            classList: ["text-center", "mb-6", "font-bold"],
            innerText: "✨ New friend, yay ✨",
          },
        },

        {
          form: {
            id: "friend-form",
            method: "post",
            classList: ["flex", "flex-col"],
            children: [
              {
                div: {
                  classList: ["mb-2", "font-bold", "color-gray-4"],
                  children: [
                    {
                      label: {
                        for: "name",
                        innerText: "Name",
                      },
                    },
                  ],
                },
              },
              {
                div: {
                  id: "friend-form-name",
                  classList: ["mb-4", "font-size-5"],
                  children: [
                    {
                      div: {
                        classList: ["emoji", "z-30"],
                        innerText: "👤",
                      },
                    },
                    {
                      input: {
                        type: "text",
                        name: "name",
                        id: "input-name",
                        classList: ["transition"],
                      },
                    },
                  ],
                },
              },
              {
                div: {
                  classList: ["mb-2", "font-bold", "color-gray-4"],
                  children: [
                    {
                      label: {
                        for: "number",
                        innerText: "Number",
                      },
                    },
                  ],
                },
              },
              {
                div: {
                  classList: ["mb-4", "font-size-5"],
                  children: [
                    {
                      input: {
                        type: "tel",
                        name: "number",
                        id: "input-number",
                        classList: ["transition"],
                      },
                    },
                  ],
                },
              },
              {
                div: {
                  id: "friend-form-message",
                  classList: [
                    "display-none",
                    "text-center",
                    "pb-4",
                    "transition",
                  ],
                  innerText: "&nbsp;",
                },
              },
              {
                button: {
                  type: "submit",
                  id: "save-button",
                  classList: [
                    "button",
                    "p-2",
                    "font-size-4",
                    "font-bold",
                    "transition",
                  ],
                  innerText: "😻 Save 😻",
                },
              },
            ],
          },
        },
      ],
    },
  },
];

/**
 * Create an html structure from a Javascript object.
 *
 * @param {Object|Array} obj The object or list of objects to convert to html elements
 * @return {HTMLElement}
 */
const obj2html = (obj) => {
  if (Array.isArray(obj)) {
    const elements = obj.map((elem) => obj2html(elem));
    return elements;
  } else {
    for (const key in obj) {
      const element = document.createElement(key);
      for (const attr in obj[key]) {
        if (attr == "children") {
          // Add children elements
          const children = obj2html(obj[key][attr]);
          children.forEach((child) => element.appendChild(child));
        } else if (
          ["classList", "className"].includes(attr) &&
          Array.isArray(obj[key][attr])
        ) {
          // Add classes from list
          element[attr] = obj[key][attr].join(" ");
          console.log(obj[key][attr].join(" "));
        } else {
          // Set attribute
          element[attr] = obj[key][attr];
        }
      }
      return element;
    }
  }
};

const main = document.querySelector("main");

for (const elem of content) {
  main.appendChild(obj2html(elem));
}
