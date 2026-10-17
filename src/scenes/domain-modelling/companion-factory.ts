import type { Scene } from '@graphlearning/flow'

// §2 — a private constructor behind a validating companion factory (CT).
export const companionFactory: Scene = {
  id: 'companion-factory',
  title: 'A companion that guards construction',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Sku.scala',
      label: `final class Sku private (val code: String):
  override def toString = code

object Sku:
  private val Format = "[A-Z]{3}-[0-9]{2}".r
  def parse(raw: String): Option[Sku] =
    if Format.matches(raw) then Some(new Sku(raw)) else None

Sku.parse("TEA-01")      // Some(TEA-01)
Sku.parse("tea 1")       // None
// new Sku("anything")   ✗ constructor is private`,
    },
    {
      id: 'trace',
      label: 'Class and companion',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'object', label: 'object', sub: 'exactly one instance', pattern: 'service', icon: 'box' },
        { id: 'companion', label: 'Companion', sub: 'same name, same file', pattern: 'network', icon: 'link' },
        { id: 'private', label: 'Private new', sub: 'only Sku can construct', pattern: 'warn', icon: 'lock' },
        { id: 'factory', label: 'Factory', sub: 'validates, then builds', pattern: 'storage', icon: 'shieldcheck' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
