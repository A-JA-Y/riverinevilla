import { networkRegions, networkSites } from "@/data/networkSites";

// Footer band linking every sister project website, grouped by city.
// Pass this site's own id(s) so it never links to itself. Every class name can be
// overridden so the band picks up the host footer's type and colours.

const hostOf = (url) => url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

export default function ProjectNetwork({
  currentSiteIds = [],
  title = "Explore Our Other Projects",
  className = "",
  headingClassName = "mb-4 text-[11px] font-semibold uppercase tracking-widest",
  regionClassName = "mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] opacity-60",
  linkClassName = "text-xs leading-snug opacity-90 transition-opacity hover:opacity-100",
  domainClassName = "block text-[10px] opacity-60",
  showDomain = true,
}) {
  const hidden = new Set([].concat(currentSiteIds));
  const groups = networkRegions
    .map((region) => ({
      region,
      sites: networkSites.filter((site) => site.region === region && !hidden.has(site.id)),
    }))
    .filter((group) => group.sites.length > 0);

  return (
    <nav aria-label="Our other project websites" className={className}>
      <p className={headingClassName}>{title}</p>
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map(({ region, sites }) => {
          const wide = sites.length > 8;
          return (
            <div key={region} className={wide ? "sm:col-span-2" : undefined}>
              <p className={regionClassName}>{region}</p>
              <ul className={`grid grid-cols-2 gap-x-6 gap-y-2.5 ${wide ? "" : "sm:grid-cols-1"}`}>
                {sites.map((site) => (
                  <li key={site.id}>
                    <a href={site.url} target="_blank" rel="noopener" className={`block [overflow-wrap:anywhere] ${linkClassName}`}>
                      {site.name}
                      {showDomain ? <span className={domainClassName}>{hostOf(site.url)}</span> : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
