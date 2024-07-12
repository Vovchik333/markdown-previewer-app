import { BoxWithHeader } from "../../../../components/box-with-header/BoxWithHeader";
import { BoxName } from "../../common";
import './Editor.scss';

const Editor = ({
    markdown,
    selectedBox,
    onChange,
    onSelectBox
}) => {
    const isFullScreen = selectedBox === BoxName.EDITOR;
    const isHidden = !isFullScreen && (selectedBox !== null);
    
    return (
            <BoxWithHeader 
                className={`editor ${isHidden ? 'hidden' : ''}`} 
                name={'Editor'}
                isFullScreen={isFullScreen}
                onClick={onSelectBox}
            >
                <textarea 
                    style={isFullScreen ? { minHeight: '90vh' } : {}}
                    className="editor__textarea"
                    name="text" 
                    id="editor"
                    value={markdown}
                    onChange={onChange}
                ></textarea>
            </BoxWithHeader>
    );
}

export { Editor };
