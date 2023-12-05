import Foundation

@objc public class WireguardHelper: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
