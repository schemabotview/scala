import type { Scene } from '@graphlearning/flow'

// §1 — an optional discount code resolved through a map, with its default (CT).
export const optionTrace: Scene = {
  id: 'option-trace',
  title: 'A value that may be absent',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Discount.scala',
      label: `case class Customer(name: String, discountCode: Option[String])
val discounts = Map("WELCOME" -> 10, "VIP" -> 20)

def discountPercent(c: Customer): Int =
  c.discountCode
    .flatMap(code => discounts.get(code))     // Option[Int]
    .getOrElse(0)

discountPercent(Customer("Ada", Some("VIP")))   // 20
discountPercent(Customer("Bo", None))           // 0  no code
discountPercent(Customer("Cy", Some("TYPO")))   // 0  unknown code`,
    },
    {
      id: 'trace',
      label: 'Absence, handled once',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'some-none', label: 'Some / None', sub: 'present or absent', pattern: 'storage', icon: 'box' },
        { id: 'flatmap', label: 'flatMap', sub: 'None stays None', pattern: 'service', icon: 'layers' },
        { id: 'default', label: 'getOrElse', sub: 'the default, stated once', pattern: 'network', icon: 'circlecheck' },
        { id: 'lost', label: 'No reason', sub: 'Bo and Cy look the same', pattern: 'warn', icon: 'circleslash' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
