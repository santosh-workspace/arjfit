# Image Manifest — visually verified

Every Unsplash placeholder below was **downloaded and viewed**, not just checked
for an HTTP 200. An earlier pass verified only that the URLs loaded, which let a
photograph of a log cabin sit on five pages labelled "strength floor" and
"fabrication floor".

Regenerate this list after changing imagery:

```bash
grep -ohE 'photo-[0-9]{10,}-[0-9a-f]{12}' *.html | sort -u
```

| Unsplash ID | Depicts | Used for |
|---|---|---|
| `photo-1517836357463-d25dfeac3438` | Lifter deadlifting, barbell on rubber floor | CTA band background |
| `photo-1517838277536-f5f99be501cd` | Hands on a barbell, floor level | Multi stations, turf zone |
| `photo-1518611012118-696072aa579a` | Mat-based group session | Mobility, accessories |
| `photo-1526506118085-60ce8714f8c5` | Pull-up, black and white | Testing before dispatch |
| `photo-1534258936925-c58bed479fcb` | Battle-rope session on turf | Service, hero backgrounds |
| `photo-1540497077202-7c8a3999166f` | Cardio floor — bikes and machines | Cardio hero, dumbbell area |
| `photo-1544033527-b192daee1f5b` | Dumbbell racks, black and white | Commercial repair |
| `photo-1547919307-1ecb10702e6f` | Weight plates stacked, tyre behind | Recovery, changing |
| `photo-1550345332-09e3ac987658` | Athlete at a rack, black and white | Sessions, testimonials |
| `photo-1558611848-73f7eb4001a1` | **Power rack, bench, barbell, dumbbells** | Racks & benches, strength floor |
| `photo-1571019614242-c5c5dee9f50b` | Trainer coaching a press-up | Strength hero, plate-loaded |
| `photo-1581009146145-b5ef050c2e1e` | Curling a barbell | 1:1 coaching |
| `photo-1583454110551-21f2fa2afe61` | Hands lifting dumbbells from a rack | Selectorised, technician |
| `photo-1591258370814-01609b341790` | Floor exercise, dumbbells foreground | Free weights |
| `photo-1596357395217-80de13130e92` | Squat rack in a bright gym | AMC, entrance |
| `photo-1605296867304-46d5465a13f1` | Deadlift silhouette, dark | Group sessions |
| `photo-1623874228601-f4193c7b1818` | **Dumbbells on a plyo box** | Equipment detail |
| `photo-1646656130630-07af3a262a9b` | Bench press station, dark gym | Home hero slide 1 |
| `photo-1504328345606-18bbc8c9d7d1` | **Welder with sparks** | Manufacturing / fabrication |

## Removed

| ID | Was labelled | Actually showed |
|---|---|---|
| `photo-1571055107559-3e67626fa8be` | "Strength floor" / "Fabrication floor" | **A log cabin in autumn woods** |
| `photo-1552674605-db6ffd4facb5` | "Detail of equipment on the floor" | Runners silhouetted at dusk |

All are placeholders. Replace with real ARJFIT photography before launch — see
`PLACEHOLDERS.md`.
