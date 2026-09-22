import type { BookStatus as Status } from "@/data/library";
export function BookStatus({ status }: { status: Status }) { return <span className="book-status" data-status={status}>{status}</span>; }
