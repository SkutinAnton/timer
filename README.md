# Timer (NodeGUI/React NodeGUI)

## To Use

```bash
# Clone this repository
git clone https://github.com/SkutinAnton/timer
# Go into the repository
cd timer
# Install dependencies
npm install
# Run the app
npm start
```

# Usage

- First step is to install the packer as a dev dependency. You can do so by:
  
  `npm install --save-dev @nodegui/packer`

- Next you can run the init command:
  
  ` npx nodegui-packer --init MyApp`
  
  This will produce the deploy directory containing the template. You can modify this to suite your needs. Like add icons, change the name, description and add other native features or dependencies. Make sure you commit this directory.

- Next you can run the pack command:
  
  `npx nodegui-packer --pack <path to dist>`
  
  This command essential takes the dist folder as the input and puts it in the suitable location inside the standalone executable. Also it runs the correct deployment tool (macdeployqt incase of mac, etc) and packs in the dependencies. The output of the command is found under the build directory. You should gitignore the build directory.
