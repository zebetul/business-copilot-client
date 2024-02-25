import Loading from "./Loading";
import Error from "./Error";
import { useHistory } from "../features/history/useHistory";
import CustomNavLink from "./CustomNavLink";

function HistoryNav() {
	const { history, isLoading, error } = useHistory();

	if (isLoading) return <Loading />;

	if (error) return <Error />;

	return (
		<ul className="history_list pl-5 flex flex-col gap-1 font-normal">
			{history.map((item) => (
				<li
					key={item.id}
					className="text-xs"
				>
					<CustomNavLink
						to={`/history/${item.id}`}
						className="py-1 px-2"
					>
						<p className="overflow-hidden text-ellipsis">{item.title}</p>
					</CustomNavLink>
				</li>
			))}
		</ul>
	);
}

export default HistoryNav;
