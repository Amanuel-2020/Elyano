import {Helmet} from 'react-helmet'

const MetaData =  ({title}) =>{  
    return(
<Helmet>
    <title>{`${title} - Portfoils`}</title>
</Helmet>
    )
}

export default MetaData