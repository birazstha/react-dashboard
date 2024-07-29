import Skeleton from 'react-loading-skeleton';

export default function SkeletonLoading () {
  return (
    <tbody>

      {Array.from ({length: 10}, (_, index) => (
        <tr key={index}>
          <td>
            <Skeleton height={20} />
          </td>
          <td>
            <Skeleton height={20} />
          </td>
          <td>
            <Skeleton height={20} />
          </td>
        </tr>
      ))}

    </tbody>
  );
}
