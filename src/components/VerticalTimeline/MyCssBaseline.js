import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    '@global': {
        body: {
            fontSize: '14pt',
            lineHeight: '1.5',
            letterSpacing: 'normal',
            margin: '0px',
        },
    },
})

function MyCssBaseline() {
    return null
}

MyCssBaseline.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MyCssBaseline)
