import React, { useCallback, useState } from "react";

const Context = React.createContext(null);

export const AppContextProvider = ({ children, ...props }) => {
    const context = useCreateAppContext(props);
    return <Context.Provider value={context}>{children}</Context.Provider>;
};

export function useAppContext() {
    const context = React.useContext(Context);
    if (!context) throw new Error("Use app context within provider!");
    return context;
}

export const useCreateAppContext = function (props) {
    const [isPageOpened, setPageOpened] = useState(props.isPageOpened || false);

    const togglePageOpened = useCallback(() => {
        setPageOpened((_test) => !_test);
    });

    const [currentProject, setCurrentProject] = useState(
        props.currentProject || 0
    );

    const [filterList, setFilterList] = useState(props.filterList || []);

    const [isMenuOpened, setMenuOpened] = useState(props.isMenuOpened || false);

    const toggleMenuOpened = useCallback(() => {
        setMenuOpened((_test) => !_test);
    });

    const setCurrentProjectAndOpen = (projectId) => {
        setCurrentProject(projectId);
        togglePageOpened();
    };

    const data = {
        pageControl: {
            isPageOpened,
            togglePageOpened,
        },
        projectControl: {
            currentProject,
            setCurrentProjectAndOpen,
        },
        filterControl: {
            filterList,
            setFilterList,
        },
        menuControl: {
            isMenuOpened,
            toggleMenuOpened,
        },
    };

    return data;
};
