import { NavigationData } from "./navigation/Navigation";

export const NavigationList = ({
  navigation,
}: {
  navigation: NavigationData;
}) => {
  return (
    <ul className="flex flex-col sm:flex-row text-xl sm:text-base gap-4 text-primary-500">
      {navigation.items.map((item) => (
        <li key={item._key}>
          <a href={`#${item.slug}`} className="nav-link">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
