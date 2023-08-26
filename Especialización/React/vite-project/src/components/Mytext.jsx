import PropTypes from 'prop-types'

export const Mytext = (props) => {
  return <p className={props.classStyle}>Mi texto debe cambiar</p>;
};

Mytext.propTypes = {
  classStyle: PropTypes.string
}