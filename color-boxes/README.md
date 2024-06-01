# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- Instructions -->
## **Further Study 2: Color Boxes**

For this part, you should show a series of 16 boxes (a box is just square div with a background color). At the bottom of all of the boxes should be a button labeled “Change”.

Initially, each box should have a background color chosen from a random list of colors.

When you click the button:

- it should select a random box
- it should change the background color of that random box to a new color from the possible colors list.

Before building anything, *think about the structure of your React app.* This entire thing shouldn’t be one giant component.

## **Further Study 3**

### **Default Properties**

For both parts, there are opportunities to move some things into default properties:

- the list of possible colors for boxes
- the number of boxes (so it doesn’t always have to be 16!)

### **Feedback on Changed Box**

For the color boxes app, it can be tricky to tell which box changed when you clicked (particularly when it picks the same random color, so you can’t see any difference!)

Change the application so that, when a box just changed, it shows “changed!” inside of the div. That text should go away after the next click.