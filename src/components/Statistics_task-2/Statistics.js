import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatList,
  StatListLable,
  StatListPercentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsContainer>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatList>
        {stats.map(stat => (
          <li key={stat.id}>
            <StatListLable>{stat.label}</StatListLable>
            <StatListPercentage>{stat.percentage}%</StatListPercentage>
          </li>
        ))}
      </StatList>
    </StatisticsContainer>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
