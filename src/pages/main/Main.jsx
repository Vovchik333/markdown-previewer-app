import { useState } from "react";
import { 
    Editor, 
    Previewer 
} from "./components/components";
import './Main.scss';
import { BoxName } from "./common";

const defaultMarkdown = (
`## This is my markdown previewer app
# Check the examples
This is [link](https://github.com/Vovchik333)
This is inline code \`<div></div>\`
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (isCode) {
    return code;
  }
}
\`\`\`
This is
> Block Quotes!
This is **bold** text
- This is list item.
And this is image ![atom image](https://s2.coinmarketcap.com/static/img/coins/200x200/3794.png)
`
);

const Main = () => {
    const [markdown, setMarkdown] = useState(defaultMarkdown);
    const [selectedBox, setSelectedBox] = useState(null);

    const handleSelectBox = (boxName) => {
        return () => {
            if (selectedBox === boxName) {
                setSelectedBox(null);
            } else {
                setSelectedBox(boxName);
            }
        }
    }
    
    const handleChangeMarkdown = (event) => {
        setMarkdown(event.target.value);
    }

    return ( 
        <main className='main-content'>
            <Editor 
                markdown={markdown} 
                selectedBox={selectedBox}
                onChange={handleChangeMarkdown}
                onSelectBox={handleSelectBox(BoxName.EDITOR)} 
            />
            <Previewer 
                markdown={markdown}
                selectedBox={selectedBox}
                onSelectBox={handleSelectBox(BoxName.PREVIEWER)} 
            />
        </main>
    );
}

export { Main };
