import PropTypes from 'prop-types';
import {
  TransactionContainer,
  TableHeaderBox,
  TableHeaderName,
  TableBody,
  TableRow,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionContainer>
      <TableHeaderBox>
        <tr>
          <TableHeaderName>Type</TableHeaderName>
          <TableHeaderName>Amount</TableHeaderName>
          <TableHeaderName>Currency</TableHeaderName>
        </tr>
      </TableHeaderBox>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRow>
          );
        })}
      </TableBody>
    </TransactionContainer>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
