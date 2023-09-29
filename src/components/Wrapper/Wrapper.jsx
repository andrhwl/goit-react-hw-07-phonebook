import PropTypes from 'prop-types';
import { Container } from './Wrapper.styled';

const Wrapper = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
