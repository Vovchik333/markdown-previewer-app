import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';
import './BoxWithHeader.scss';

const BoxWithHeader = ({
    id,
    className,
    name,
    isFullScreen,
    onClick,
    children
}) => {
    return (
        <section 
            style={isFullScreen ? { minHeight: '95vh' } : {}}
            id={id} 
            className={`box-with-header ${className}`}
        >
            <header className='box-with-header__header'>
                <h4 className='box-with-header__title'>{name}</h4>
                {isFullScreen ? (
                    <FontAwesomeIcon className='icon' icon={faMinimize} onClick={onClick} />
                ) : ( 
                    <FontAwesomeIcon className='icon' icon={faMaximize} onClick={onClick} />
                )}
            </header>
            {children}
        </section>
    );
};

export { BoxWithHeader };
