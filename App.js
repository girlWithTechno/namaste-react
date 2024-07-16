
/**
 * Create a structure like below
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h1>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 child2 tag</h1>
 *          <h2>I'm h2 child2 tag</h1>
 *      </div>
 * </div>
 * 
 * ReactElement(object) is an object that becomes => HTML(Browser Understands) while it is rendering on to the DOM
 */

const parent = React.createElement(
    "div", 
    {
        id: 'parent',
    },
    [
        React.createElement(
            "div",
            {
                id: 'child'
            },
            [
                React.createElement(
                    "h1",
                    {},
                    "I'm h1 tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I'm h2 tag"
                )
            ]
        ),
        React.createElement(
            "div",
            {
                id: 'child2'
            },
            [
                React.createElement(
                    "h1",
                    {},
                    "I'm h1 child2 tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I'm h2 child2 tag"
                )
            ]
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);