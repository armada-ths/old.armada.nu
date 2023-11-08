export function PlaceGoldFirst(exhibitors) {
    // exhibitors is an array of exhibitor objects
    // This is O(n) fast, the other approach of .sort() is O(n log n) slow

    const goldExhibs = exhibitors.filter(
        ex => ex.tier && parseInt(ex.tier) === 3
    )
    const nonGolds = exhibitors.filter(
        ex => ex.tier == null || parseInt(ex.tier) !== 3
    )

    const returnValue = [...goldExhibs, ...nonGolds]

    return returnValue
}
