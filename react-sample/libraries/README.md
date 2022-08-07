
Material design : https://material-ui.com/getting-started/installation/
Router
    - react-router-dom
        - useHistory
        - HashRouter
        - Route
        - Switch
react-power-tooltip
query-string : get query in the url
    ```
    const params = queryString.parse(props.location.search);
            if (params != null && ['0','1'].includes(params.tab)) {
                return parseInt(params.tab);
            }
    ```
    
react-waypoint
    - when enter the scroll point. start some action like animation
    
react-lottie
    - animation play