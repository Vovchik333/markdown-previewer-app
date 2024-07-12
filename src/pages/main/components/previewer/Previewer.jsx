import { BoxWithHeader } from "../../../../components/box-with-header/BoxWithHeader";
import { marked } from 'marked';
import { useEffect } from "react";
import { BoxName } from "../../common";
import './Previewer.scss';

marked.setOptions({
    gfm: true,
    breaks: true
});

const Previewer = ({
    markdown,
    selectedBox,
    onSelectBox
}) => {
    const isFullScreen = selectedBox === BoxName.PREVIEWER;
    const isHidden = !isFullScreen && (selectedBox !== null);


    useEffect(() => {
        const preview = document.getElementById('preview');
        preview.innerHTML = marked.parse(markdown);
    }, [markdown]);

    return (
        <BoxWithHeader 
            className={`previewer ${isHidden ? 'hidden' : ''}`} 
            name={'Previewer'}
            isFullScreen={isFullScreen}
            onClick={onSelectBox}
        >
            <section 
                style={isFullScreen ? { minHeight: '90vh' } : {}}
                id="preview" 
                className={"previewer__content"}
            ></section>
        </BoxWithHeader>
    );
};

export { Previewer };
