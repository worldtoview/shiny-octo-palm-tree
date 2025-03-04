import { useLocation } from "react-router-dom";
import React from "react";

export default () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}